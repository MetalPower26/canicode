import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { getProject } from '@/uploads/query';
import { setProject } from '@/uploads/upload';
import ReactMarkdown from 'react-markdown';
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'github-markdown-css'

// editForm gets a uid parameter, showing the uid of the project
// Project has values
// uid, title, content, user, lastUpdated, status, points

const uidValidation = {
  required: { value: true, message: "Unique ID is required"},
  maxLength: { value: 20, message: "Unique ID has a maximum of 20 characters"},
  pattern: { value: /[a-zA-Z0-9]+(-[a-zA-Z0-9]+)+/, message: "Unique ID must contain only alphanumeric characters or hyphen as a connector (Incorrect examples : \"-a\" or \"ab--cd\")"}
};

const titleValidation = {
  required: { value: true, message: "Title is required"},
  maxLength: { value: 70, message: "Title has a maximum of 70 characters" },
  pattern: { value: /[^\s]+( [^\s]+)*/, message: "Title must comprise of characters and no leading spaces or consecutive spaces"},
};

const contentValidation = {
  required: { value: true, message: "Content cannot be empty"}
};

function EditForm({ uid }){
  const { register, handleSubmit, watch, reset, formState: { errors }} = useForm();

  useEffect(async () => {
    // edit an old project
    data = await getProject(uid);
    defaultValues = {};
    defaultValues["title"] = data.title;
    defaultValues["content"] = data.content;
    defaultValues["user"] = data.user;
    reset({...defaultValues});
  }, []);

  const onSubmit = async (data) => {
    values = {};
    values["title"] = data.title;
    values["content"] = data.content;
    values["user"] = data.user;
    values["lastUpdated"] = new Date().getTime();
    values["status"] = "Not Approved Yet";
    values["points"] = 0;
    await setProject(uid, data);
  }

  const watchContent = watch("content");

  return (
    <div class="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-md">
      <h2 class="text-2xl font-bold mb-4">Edit Project {uid}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold mb-2">Title</label>
          <input {...register("title", titleValidation)} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div class="mb-4">
          <label for="content" class="block text-gray-700 font-bold mb-2">Content</label>
          <input {...register("content", contentValidation)} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <input {...register("user")} hidden />
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
      <ReactMarkdown className="markdown-body">{watchContent}</ReactMarkdown>
    </div>
  );
}

function CreateForm(){
  const { register, handleSubmit, watch, reset, formState: { errors }} = useForm();
  const [user, loading, error] = useAuthState(auth);

  const onSubmit = async (data) => {
    if(user === null){
      console.error("User is not logged in");
    } else {   
      values = {};
      values["title"] = data.title;
      values["content"] = data.content;
      values["user"] = user;
      values["lastUpdated"] = new Date().getTime();
      values["status"] = "Not Approved Yet";
      values["points"] = 0;
      await setProject(data.uid, data);
    }
  }

  const watchContent = watch("content");

  return (
    <div class="w-full mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-md">
      <h2 class="text-2xl font-bold mb-4">Create New Project</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-4">
          <label for="uid" class="block text-gray-700 font-bold mb-2">Unique ID</label>
          <input {...register("uid", uidValidation)} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold mb-2">Title</label>
          <input {...register("title", titleValidation)} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div class="mb-4">
          <label for="content" class="block text-gray-700 font-bold mb-2">Content</label>
          <textarea {...register("content", contentValidation)} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
      <ReactMarkdown className="markdown-body">{watchContent}</ReactMarkdown>
      <ReactMarkdown># A</ReactMarkdown>
    </div>
  );
}

export { EditForm, CreateForm }