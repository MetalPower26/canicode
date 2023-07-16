import { db } from "@/firebase/firebase";
import { doc, setDoc, deleteDoc } from 'firebase/firestore';

// validates the data created to a collection if it exists

function emptyOrNotString(param){
  if (typeof param != 'string' || param === "") {
    return true;
  } else {
    return false;
  }
}

function validate(data){
  if (emptyOrNotString(data.title)) {
    return false;
  }
  if (emptyOrNotString(data.content)) {
    return false;
  }
  if (emptyOrNotString(data.user)) {
    return false;
  }
  return true;
}

// Creates a new project if it doesn't exist
// Edit the project if it exists

async function setProject(uid, data) {
  if (!validate(data)) {
    console.error("Data misfigured");
    return;
  }
  try {
    const Ref = doc(db, "projects", uid);
    await setDoc(Ref, data);
  } catch (e) {
    console.error("Error adding document ", e);
  }
}

async function deleteProject(uid){
  await deleteDoc(doc(db, "projects", uid));
}

export { setProject, deleteProject };