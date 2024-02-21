import React, { useEffect, useState } from "react";
import decod from "../../assets/Logo.png";
import "./style.css";
const PrivacyPolicy = () => {

    const [privacyPolicy, setPrivacyPolicy] = useState({});
    const [termsOfService, setTermsOfService] = useState({});

    useEffect(() => {
        fetch('http://ec2-13-233-127-36.ap-south-1.compute.amazonaws.com:8000/policy')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPrivacyPolicy(data.privacyPolicy);
                setTermsOfService(data.tos);
            })
            .catch(error => console.error('Error fetching data: ', error));

        return () => {
            console.log("unMount");
        }
    }, []);
    return (
        <div className="privacymain">
            <img alt="Decod Games" className='decodlogo' src={decod} />
            <div className="container">

                <h1>
                    Privacy Policy
                </h1>

                {Object.entries(privacyPolicy).map(([key, value]) => {
                    if (value.heading) {
                        return <div key={key}>
                            <h3>{value.heading}</h3>
                            <div className="paragraph" dangerouslySetInnerHTML={{ __html: value.content.replaceAll('\n','<br>') }} />
                            {/* <p>{value.content.replaceAll('\n','<br>')}</p> */}
                        </div>
                    } else {
                        return <p className="paragraph" key={key}>{value.content}</p>
                    }
                })}

                <h1>
                    Terms Of Service
                </h1>

                {Object.entries(termsOfService).map(([key, value]) => {
                    if (value.heading) {
                        return <div key={key}>
                            <h3>{value.heading}</h3>
                            <p className="paragraph">{value.content}</p>
                        </div>
                    } else {
                        return <p className="paragraph" key={key}>{value.content}</p>
                    }
                })}

            </div>
        </div>
    );
}

export default PrivacyPolicy;