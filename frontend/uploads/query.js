import { db } from '@/firebase/firebase';
import { collection, doc, query, where, getDoc, getDocs } from 'firebase/firestore';

async function getProject(uid){
  const docSnapshot = await getDoc(doc(db, "projects", uid));
  if(docSnapshot.exists()){
    console.log("Found data ", docSnapshot.data());
    return docSnapshot.data();
  }else{
    console.error("Data not found ", uid);
  }
}

async function getUserProjects(user){
  const q = query(collection(db, "projects"), where("user", "==", user));
  const querySnapshot = await getDocs(q);
  const res = [];

  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data["uid"] = doc.id;
    res.push(data);
  });

  console.log(res);
  return res;
}

async function getProjectList(){
  const querySnapshot = await getDocs(query(collection(db, "projects")));
  const res = [];

  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data["uid"] = doc.id;
    res.push(data);
  });

  console.log(res);
  return res;
}

export { getProject, getProjectList, getUserProjects }