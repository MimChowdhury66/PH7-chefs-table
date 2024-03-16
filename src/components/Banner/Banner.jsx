
const Banner = () => {
    return (
        <div className="container mx-auto mt-5 lg:mt-10 mb-24 ">
            <div className="hero h-[600px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/3hRcXs4/Rectangle-1.pnghttps://i.ibb.co/3hRcXs4/Rectangle-1.png)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:w-[897px]">
                        <h1 className="mb-5 text-xl lg:text-5xl font-bold text-[#FFFFFF] ">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5  text-sm lg:text-lg font-normal text-[#FFFFFF]">GOOD COOKS KNOW HOW. GREAT COOKS KNOW WHY. <br />
                            When family is Far, Foood offers a sense of Belonging During Ramadan
                        </p>

                        <div className="grid lg:flex gap-6 items-center  justify-center">
                            <button className="btn border-none bg-[#0BE58A] rounded-full  ">Explore Now</button>
                            <button className="btn  btn-outline text-white rounded-full">Our Feedback</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;