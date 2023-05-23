import React, { useEffect } from "react";
import decod from "../../assets/decod.png";
import "./style.css";
const PrivacyPolicy = () => {

    useEffect(() => {
        console.log("Mount");

        return () => {
            console.log("unMount");
        }
    }, []);
    return (
        <div className="privacymain">
            <img className='decodlogo' src={decod} />
            <div className="container">

                <h1>
                    Privacy Policy
                </h1>

                <p>
                    Decod Games respect the privacy of the users of their mobile applications (“User” or “you”) and are committed to protect the User’s information. This Privacy Policy explains the types of information we collect, and how we collect, use, disclose, share and protect your information. We recognize the importance of protecting the information collected about you. Please familiarize yourself with our privacy practices.
                </p>
                <p>
                    If you have any questions, complaints, or comments regarding our privacy statement or policies, please contact us via support@decodgames.in
                </p>

                <h2>Information We Collect</h2>
                <p>
                    We collect the following categories of your personal information and may sell it to third parties: identifiers, commercial information, internet or other electronic network activity information, geolocation data, and inferences drawn from these categories.</p>
                <p>

                    We may collect through the Services both personal information that identifies you and can be used to contact you, and non-personal information, which is data in a form that does not allow direct association with you, which may include technical information, including the IP address through which you are accessing the Services and the unique mobile device ID or virtual unique device identifier for any mobile device you may be using.
                </p>

                <h3>1. Personal Information</h3>
                <p>
                    Personal information may include, but is not limited to, your name, e-mail address, date of birth, and any personal photo or image representation. We will collect, use and disclose personal information only as described in this Privacy Policy. Please note that some non-personal information would be considered a part of your personal information if it were combined with other information in a way that enables you to be identified, but the same information is considered non-personal information when taken alone or combined only with other non-personal information.
                </p>

                <h3>2. Non-Personal Information</h3>
                <p>
                    Non-personal information, alone, cannot be used to identify or contact you. We collect non-personal information about your use of Decod Games Gamesand include aggregated information regarding usage of the Apps. The non-personal information collected may include information related to your mobile device or computer system, including mobile device type, IP address, unique mobile device ID or other device identifiers, Media Access Control (MAC) address, telephone number of mobile device, country of registration. It may also include browser type, language, Internet Service Provider (ISP), referring and exit pages, time spent, information searched for, time and date stamp, clickstream data, feature usage, game play statistics, scores and achievements, user rankings, time spent playing our games, and other statistics.
                </p>
                <h2>How We Use Your Information</h2>
                <p>
                    Generally, we use your information to provide you with an efficient and customized experience. For example, we may use information in the following ways:
                </p>
                <ul>
                    <li>
                        To send important notices, such as communications about your purchases and changes to this Privacy Policy;
                    </li>
                    <li>To inform you about new Decod Games Games's products and promote Decod Games Games's products;</li>
                    <li>To send “push” notifications to your mobile device regarding Decod Games Games that you have been playing (for example, suggesting that you open the Decod Games Games to take certain actions);</li>
                    <li>To provide in-game information regarding player achievements, such as leaderboards;</li>
                    <li>To provide technical support and respond to inquiries from you;</li>
                    <li>To prevent fraud and potentially illegal activities;</li>
                    <li>To help us to develop, deliver and improve the Apps;</li>
                    <li>For market research purposes that support our efforts to deliver a more valuable service to our community of Decod Games Games's users;</li><li>To deliver and target advertising from third parties;</li>
                    <li>To gather demographic information about Decod Games Games users in order to more effectively manage the Apps and provide targeted advertising; and</li>
                    <li>To track clicks or other ad fulfillment metrics.</li>
                    <li>If we send e-mail or SMS messages to you for the purpose of promoting Decod Games Game&amp;sapos;s products or services, or those of a third-party partner, we will generally provide you with choices about receiving further such promotional messages. Preferences for “push” notifications may in most cases be adjusted through Decod Games Games or your mobile device.</li>
                </ul>
                <h2>Advertising</h2>
                <p>
                    Any advertisements served by Google, Inc., and affiliated companies may be controlled using cookies. These cookies allow Google to display ads based on your visits and other sites that use Google advertising services.
                </p>
                <p>
                    As mentioned above, any tracking done by Google through cookies and other mechanisms is subject to Google's own privacy policies.

                </p>
                <h2>Children's Privacy</h2>
                <p>
                    These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.</p> <p>If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                </p>
                <h2>Contact us</h2>
                <p>
                Concerns or questions about this privacy policy can be directed to support@decodgames.in for further clarification.
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;