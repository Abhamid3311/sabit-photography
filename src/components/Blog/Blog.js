import React from 'react';

const Blog = () => {
    return (
        <div className='m-3'>
            <h1 className='text-primary text-center my-5'>Blog page</h1>
            <div >
                <h3>What is the difference between authentication and authorization?</h3>
                <p> Authentication is the process of verifying who someone is. when we go any website they take our Email or this kind of information for justify us this process called  Authentication. While in authorization process, person's or user's authorities are checked for accessing the resources. Authentication is done before the authorization process, whereas authorization process is done after the authentication process.</p>

                <p> Otherside, Authorization is the process of verifying what specific applications, files, and data a user has access to. While in authorization process, person's or user's authorities are checked for accessing the resources. if we have permission or access we can do anything into the site its called Authorization.</p>
            </div>

            <div>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase Authentication system help us easily make our system secure.Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system</p>
                <p>
                    Firebase   provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. and their other best feature is website hosting
                </p>
            </div>

            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>
                    <ul>
                        <li>Parse</li>
                        <li>Back4app</li>
                        <li>Kinvey</li>
                        <li>Kuzzle</li>
                        <li>AWS Amplify</li>
                        <li>RxDB</li>
                        <li>Flutter</li>
                        <li>Couchbase</li>
                        <li>NativeScript</li>
                        <li>LoopBack</li>
                    </ul>
                </p>
            </div>

        </div>
    );
};

export default Blog;