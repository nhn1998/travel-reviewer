import React from 'react';

const Blog = () => {
    return (
        <div className='m-10'>
            <div className="text-4xl text-bold">1.Difference between SQL and NoSQL</div>
            <p>Ans:The five critical differences between SQL vs NoSQL are:

                SQL databases are relational, NoSQL databases are non-relational.
                SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p><br />
            <div className="text-4xl text-bold">2.Difference between SQL and NoSQL</div>
            <p>Ans:WT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            </p><br />
            <div className="text-4xl text-bold">3.What is the difference between javascript and NodeJS?</div>
            <p>Ans:1. NodeJS :
                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                <br />
                2. JavaScript :
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p><br />
            <div className="text-4xl text-bold">4.How does NodeJS handle multiple requests at the same time?</div>
            <p>Ans:NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
        </div>
    );
};

export default Blog;