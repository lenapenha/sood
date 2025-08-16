import Image from "next/image";
import Cross from '@/assets/cross.png';
import Heart from '@/assets/heart.png';
import Dove from '@/assets/dove.png';

export default function AboutHome() {
    return (
        <section id="about" className="container flex flex-col justify-center items-center py-16">
            <div className="flex flex-col items-center text-center p-4">
                <h2 className="text-3xl font-bold mb-4">About</h2>
                <h2 className="text-3xl mb-4 font-serif">Walking Out of Darkness, Into the Light of Christ</h2>
                <p className="text-xl ">
                    Straight Out of Darkness brings education to struggling community by providing them education, counseling, and rehabilitation resources. We go above and beyond to help equip clients and their families to get the help they need. We are a faith based program and we take the safety and recovery of our clients seriously.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="lg:col-span-2 p-4 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg shadow text-center">
                            <Image src={Cross} alt="Our Mission" width={100} height={100} className="mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                            <p>
                                To provide hope and support to those struggling with addiction and mental health issues.
                                 It is our goal to help with spiritual, emotional, and physical healing. To see every hurting person find healing, hope, and freedom, never walking alone through addiction, trauma, or homelessness.
                            </p>
                        </div>
                        <div className="p-4 rounded-lg shadow text-center">
                            <Image src={Heart} alt="Our Vision" width={100} height={100} className="mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                            <p>
                               To see every hurting person find healing, hope, and freedom. Never walking alone through addiction, trauma, or homelessness.
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Image src={Dove} alt="Our Values" width={100} height={100} className="mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Our Values</h3>
                        <ul className="list-disc list-inside text-left inline-block">
                            <li><strong>Faith:</strong> Christ is at the center of everything we do.</li>
                            <li><strong>Compassion:</strong> We love people right where they are.</li>
                            <li><strong>Healing:</strong> Emotional, spiritual, and physical restoration.</li>
                            <li><strong>Community:</strong> No one heals alone; we walk together.</li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-3xl font-serif mb-2 lg:mb-8">Michelle Perry</h3>
                    <p className="mb-2 lg:mb-8">
                        She grew up experiencing significant trauma and eventually went down a path of drug addiction and deep emotional wounds. She later found healing and hope through her faith in God and now leads Straight Out of Darkness Ministry, where she shares her story to inspire others on their own journey of recovery from addiction and trauma.
                    </p>
                    <p>
                        Michelle faced many challenges at home due to her parents’ struggles with addiction, alcoholism, domestic violence, and mental health issues. Despite the abuse, she persevered with resilience and found restoration through her faith. She is now actively involved in Straight Out of Darkness Recovery Ministry and desires to be a voice for those struggling with mental illness, addiction, domestic violence, and homelessness.
                    </p>
                </div>
            </div>
        <div className="container flex flex-col lg:flex-row justify-between items-start p-4 lg:py-16 gap-8">    
            <div>
                <h3 className="text-3xl font-serif mb-2 lg:mb-8">Where we serve</h3>
                <p className="mb-2  ">
                    Thursdays | 6:00-7:00 p.m.
                </p>
                <p className="mb-2">
                    At Hope and Anchor Church: 2216 W College, Springfield, MO
                </p>
                <p className="mb-2 lg:mb-8">
                    Childcare is not available at this time.
                </p>
                <p>
                    Our meetings are open share groups for anyone struggling with addiction, alcoholism, mental health challenges, grief, or trauma. As well as anyone who has loved ones going through these issues and wants to learn how to support them.

                </p>
            </div>
            <div>
                <h3 className="text-3xl font-serif mb-2 lg:mb-8">Get Involved</h3>
                <p className="mb-2 lg:mb-8">
                    There are many ways to get involved with our ministry and support our mission. Whether you want to volunteer your time, make a donation, or simply spread the word, we welcome your support.
                </p>
                <p>
                    Together, we can make a difference in the lives of those struggling with addiction and trauma. Contact us today to learn more about how you can help.
                </p>
            </div>
        </div>
        <div className="mt-8">
            <h3 className="text-3xl font-serif font-bold mb-2 lg:mb-8">Ready to take the first step?</h3>

        </div>
        </section>
    );
}
