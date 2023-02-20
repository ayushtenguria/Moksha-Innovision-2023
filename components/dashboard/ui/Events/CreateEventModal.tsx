import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useState } from "react";
import { generateUUID } from "three/src/math/MathUtils";
import InlineAlert from "../../../Alerts/InlineAlert";
import Spinner from "../../../Loaders/Spinner";
import FormInput from "../Forms/FormInput";
type Props = { setEventModal: (a: any) => any; getEvent?: () => any };

interface formFields {
  [key: string]: any;
}

const defaultFormFields: formFields = {
  event_name: "",
  tagline: "",
  desc: "",
  rules: "", //separate using commas
  venue: "",
  date_time: "",
  prize_pool: 0,
  team_size: "",
  instagram: "",
  poc1: "",
  poc2: "",
  poc3: "",
  poster: "",
  form_question: "",
};

const CreateEventModal = (props: Props) => {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [eventId, setEventId] = useState<any>(generateUUID());
  const [isLoading, setIsLoading] = useState("none");
  const [alert, setAlert] = useState("");
  const { setEventModal, getEvent } = props;

  const formatPoc = (text: string) => {
    let arr = text.split(":");
    if (arr.length !== 2) return {};
    return { [arr[0]]: arr[1] };
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let {
      rules,
      poc1,
      poc3,
      poc2,
      event_name,
      tagline,
      desc,
      venue,
      date_time,
      prize_pool,
      team_size,
      instagram,
      poster,
      form_question,
    } = formFields;

    setIsLoading("form");

    let soc_id = user?.id;
    rules = rules.split("\n");
    form_question = form_question.split("\n");
    let POCS = { ...formatPoc(poc1), ...formatPoc(poc2), ...formatPoc(poc3) };

    const { data } = await supabase.storage
      .from("event-posters")
      .getPublicUrl(eventId + "poster");

    poster = data.publicUrl;

    try {
      const { data, error } = await supabase.from("socevent").insert([
        {
          rules,
          poc: POCS,
          event_name,
          tagline,
          desc,
          venue,
          date_time,
          prize_pool,
          team_size,
          instagram,
          poster,
          soc_id,
          form_question,
        },
      ]);

      if (error) {
        throw error;
      } else {
        setEventId(generateUUID());
        setAlert("success");
        e.target.reset();
      }
    } catch (err) {
      setAlert("error");
      console.log(err);
    }
    setIsLoading("none");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleUpload = async (e: any) => {
    setIsLoading("image");

    try {
      const file = e.target.files[0];
      const { data, error } = await supabase.storage
        .from("event-posters")
        .upload(eventId + "poster", file, {
          cacheControl: "3600",
          upsert: false,
        });
      if (error) {
        console.log(error);
      }
    } catch (err) {
      console.log("error");
    }
    setIsLoading("none");
  };

  return (
    <div className="relative m-auto flex max-h-[700px] min-w-[350px] max-w-xl flex-col rounded-lg bg-white p-4 px-6 md:min-w-[500px]">
      <button onClick={() => setEventModal(false)}>
        <Image
          src={"/modalcross.svg"}
          width={25}
          height={25}
          alt={"cross modal"}
          className="absolute left-4 top-4"
        />
      </button>
      <h1 className="text-center text-4xl font-semibold text-black ">
        Create New Event
      </h1>
      <form
        action=""
        className="mt-2 overflow-y-scroll"
        onSubmit={handleSubmit}
      >
        <FormInput
          required
          onChange={handleChange}
          labelColor="black"
          label="Event Name"
          type="text"
          id="Event Name"
          name="event_name"
        />
        <FormInput
          onChange={handleChange}
          labelColor="black"
          label="Tagline"
          type="text"
          id="Tagline"
          name="tagline"
        />
        <FormInput
          required
          onChange={handleChange}
          labelColor="black"
          label="Description"
          type="textarea"
          id="Description"
          name="desc"
          className=""
        />
        <FormInput
          onChange={handleChange}
          labelColor="black"
          label="Rules"
          type="textarea"
          placeholder={
            "Separate each rule with enter key! \nFor example:\n Rule 1 \n Rule 2"
          }
          id="Rules"
          name="rules"
        />
        <FormInput
          required
          onChange={handleChange}
          labelColor="black"
          label="Venue"
          type="text"
          id="Venue"
          name="venue"
        />
        <FormInput
          required
          onChange={handleChange}
          labelColor="black"
          label="Date and Time"
          type="datetime-local"
          id="Date and Time"
          name="date_time"
        />
        <FormInput
          required
          onChange={handleChange}
          labelColor="black"
          label="Team size"
          type="number"
          id="Team Size"
          name="team_size"
        />
        <FormInput
          onChange={handleChange}
          labelColor="black"
          label="Prize Pool"
          type="number"
          id="Prize Pool"
          name="prize_pool"
        />
        <FormInput
          onChange={handleChange}
          labelColor="black"
          label="Instagram"
          type="text"
          id="Instagram"
          name="instagram"
        />
        <FormInput
          required
          onChange={handleChange}
          labelColor="black"
          pattern="^[^:\s]+:\d+$"
          label="POC"
          placeholder="Name : 9833123434 , use : to separate phno."
          type="text"
          id="POC"
          name="poc1"
        />
        <FormInput
          onChange={handleChange}
          labelColor="black"
          pattern="^[^:\s]+:\d+$"
          label="POC 2"
          type="text"
          placeholder="Name:9833123434 , use : to separate"
          id="POC 2"
          name="poc2"
        />
        <FormInput
          onChange={handleChange}
          pattern="^[^:\s]+:\d+$"
          labelColor="black"
          label="POC 3"
          placeholder="Name:9833123434 , use : to separate"
          type="text"
          id="POC 3"
          name="poc3"
        />

        <FormInput
          onChange={handleChange}
          labelColor="black"
          label="Form Questions"
          placeholder={`Enter questions separated by ENTERT key !! \n For example \n Enter Some Of Your Past Works \n Enter your weight`}
          type="textarea"
          id="Form Questions"
          name="form_question"
        />

        <div className="flex items-baseline ">
          <FormInput
            required
            disable={!formFields.event_name}
            onChange={handleUpload}
            labelColor="black"
            label="Poster Image"
            type="file"
            accept="image/png , image/jpeg"
            id="Poster Image"
            name="poster"
          />
          <span className="relative">
            {" "}
            {isLoading === "image" ? <Spinner /> : "Create New Event"}
            {!formFields.event_name && (
              <div className="overlay absolute mt-3 rounded-lg bg-[rgba(141,36,36,0.8)] p-2 text-center font-bold">
                Fill Form First
              </div>
            )}
          </span>
        </div>
        <span className="m-auto mt-3 flex w-[250px] justify-center rounded-md bg-saffron-600 px-3 py-2 font-medium">
          <button>
            {" "}
            {isLoading === "form" ? <Spinner /> : "Create New Event"}
          </button>
        </span>
      </form>
      {alert && (
        <InlineAlert
          success={alert === "success"}
          className="mt-4 w-full rounded text-center font-bold tracking-wider text-white drop-shadow-lg"
        >
          {alert === "success"
            ? `Congrats , Event Created `
            : `An Error Occurred , Reload and try again`}
        </InlineAlert>
      )}
    </div>
  );
};

export default CreateEventModal;
