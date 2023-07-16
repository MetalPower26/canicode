import { db } from '@/firebase/firebase';
import { collection, doc, query, where, getDocs } from 'firebase/firestore';

async function getUserProjects(user){
  const q = query(collection(db, "projects"), where("user", "==", user));
  const querySnapshot = await getDocs(q);
  const res = {};

  querySnapshot.forEach((doc) => {
    res[doc.id] = doc.data();
  });

  console.log(res);
  return res;
}

async function getProjectList(){
  const querySnapshot = await getDocs(query(collection(db, "projects")));
  const res = {};

  querySnapshot.forEach((doc) => {
    res[doc.id] = doc.data();
  });

  console.log(res);
  return res;
}