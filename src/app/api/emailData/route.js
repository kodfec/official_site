import { NextResponse } from "next/server";
import { transporter,mailOptions } from "../../config/nodeMailer";

export async function POST(request, response) {
    let message;
    let status;
    const data = await request.json();
    console.log(data);
    if (request.method === 'POST') {
        status = 200;
        if (data.fname === "") {
            message = "Please set your first name";
        } else if (data.lname === "") {
            message = "Please set your last name";
        } else if (data.mobile === "") {
            message = "Please set your mobile number";
        } else if (data.email === "") {
            message = "Please set your email address";
        } else if (data.Address1 === "") {
            message = "Please set your address";
        }else if(data.requirement===""){
            message="Please set your requirement"
        }else{

            try {
                 transporter.sendMail({
                    ...mailOptions,
                    subject:"Quotation",
                    text:"This is a test string",
                    html:`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Quotation Request</title>
                        <style>
                            /* Add your CSS styles here */
                            body {
                                font-family: Arial, sans-serif;
                            }
                            .container {
                                max-width: 600px;
                                margin: 0 auto;
                                padding: 20px;
                                background-color: #f5f5f5;
                            }
                            h2 {
                                color: #333;
                            }
                            .data {
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 5px;
                                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
                            }
                            /* You can add more styles as needed */
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2>Quotation Request Details</h2>
                            <div class="data">
                                <p><strong>First Name:</strong> ${data.fname}</p>
                                <p><strong>Last Name:</strong> ${data.lname}</p>
                                <p><strong>Mobile:</strong> ${data.mobile}</p>
                                <p><strong>Email:</strong> ${data.email}</p>
                                <p><strong>Address 1:</strong> ${data.Address1}</p>
                                <p><strong>Address 2:</strong> ${data.Address2}</p>
                                <p><strong>Requirement:</strong> ${data.requirement}</p>
                            </div>
                        </div>
                    </body>
                    </html>`,

                });
                message="Success";
            } catch (error) {
                console.log(error);
                return NextResponse.json({ message: error.message }, { status: 400 });
            
            }


           
        }
    } else {
        message = "Method not support";
        status = 405;
    }
    return NextResponse.json({ message: message }, { status: status });
}