"use client"
import BlogDisplay from '@/components/BlogCard';
import Navbar from '@/components/Navbar';
import { Client, Databases, ID } from 'appwrite';
import { useEffect, useState } from 'react';

const blogs = [
  {
    title: "Learn JavaScript",
    author: "Alice Johnson",
    metaDesc: "JavaScript is a versatile programming language used in web development.",
    slug: "learn-javascript"
  },
  {
    title: "Mastering CSS",
    author: "Bob Smith",
    metaDesc: "CSS makes the web beautiful and responsive.",
    slug: "mastering-css"
  },
  {
    title: "Understanding HTML",
    author: "Catherine Lee",
    metaDesc: "HTML is the foundation of every web page.",
    slug: "understanding-html"
  }
];


export default function Home() {

  const client = new Client();
  // const [blogs, setBlogs] = useState([])
  
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('673c640e0037a3a3b4c1');

    const databases = new Databases(client);


    let promise = databases.listDocuments(
      "673c7b0e003753dd509b",
      "673c7b24003292ade9b7",
      []
  );
  
  promise.then(function (response) {
      console.log(response);
      // setBlogs(response.documents)
  }, function (error) {
      console.log(error);
  });


// const promise = databases.createDocument(
//     '673c7b0e003753dd509b',
//     '673c7b24003292ade9b7',
//     ID.unique(),
//    element
// );

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });

  return (
    <>
      <Navbar />
      <div>
      <BlogDisplay blogs={blogs} />
    </div>
    </>
  );
}
