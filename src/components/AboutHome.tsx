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
                            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                            <p>
                                To provide hope and support to those struggling with addiction and mental health issues.
                                 It is our goal to help with spiritual, emotional, and physical healing.
                            </p>
                        </div>
                        <div className="p-4 rounded-lg shadow text-center">
                            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                            <p>
                                A world where individuals can find healing and restoration through Christ.
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Our Values</h3>
                        <p>
                            Compassion, Integrity, and Empowerment.
                        </p>
                    </div>
                </div>
                <div className="p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-bold mb-2">Michelle</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim diam, suscipit id convallis vel, pharetra sodales augue. Maecenas lacinia, erat sed interdum convallis, dolor arcu dignissim sapien, in euismod augue ex sit amet ipsum. Phasellus in metus a purus blandit tincidunt. Vestibulum nec felis ac quam rutrum molestie eu eget ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim diam, suscipit id convallis vel, pharetra sodales augue. Maecenas lacinia, erat sed interdum convallis, dolor arcu dignissim sapien, in euismod augue ex sit amet ipsum.
                    </p>
                </div>
            </div>
        </section>
    );
}
