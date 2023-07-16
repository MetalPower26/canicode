import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { getProject } from '@/uploads/query';
import { setProject } from '@/uploads/upload';

// editForm gets a uid parameter, showing the uid of the project
// Project has values
// uid, title, content, user, lastUpdated, status, points

function editForm({ uid }){
  const { register, handleSubmit, watch, reset, formState: { errors }} = useForm();

  useEffect(async () => {
    // edit an old project
    data = await getProject(uid);
    defaultValues = {};
    defaultValues["title"] = data.title;
    defaultValues["content"] = data.content;
    defaultValues["user"] = data.user;
    reset({...defaultValues});
  });

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

  const titleValidation = {
    required: { value: true, message: "Title is required"},
    maxLength: { value: 70, message: "Title must be less than 70 characters" },
    pattern: { value: /[^\s]+( [^\s]+)*/, message: "Title must comprise of characters and no leading spaces or consecutive spaces"},
  }

  const contentValidation = {
    required: { value: true, content: "Content cannot be empty"}
  }

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
    </div>
  );
}