import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsLetterBox from './../components/NewsLetterBox.jsx';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          Welcome to Earthstore – where style, comfort, and conscious choices come together. We’re here to help you find footwear that fits not just your feet, but your values too. From everyday essentials to statement styles, our carefully curated collections are designed to move with you—wherever life takes you.


          </p>
          <p>
          Our journey began with a simple mission: to make a positive impact in our industry by delivering reliable and effective solutions. Today, we continue to grow and innovate, ensuring that our clients receive the best possible service and support.

          </p>  
          <b className="text-gray-800 ">Our Mission</b>
          <p>
          At Earthstore, our aim is to make fashion-forward footwear accessible, comfortable, and conscious. We strive to offer products that not only elevate your style but also make shopping easy, enjoyable, and aligned with your values. Every pair is chosen to inspire confidence and support your journey—wherever life takes you.

          </p>
        </div>
      </div>
      <div className=" text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance </b>
            <p className="text-gary-600 ">
            Earthstore delivers footwear that’s stylish, durable, and made for comfort. Each pair is handpicked to ensure long-lasting quality you can rely on.


            </p>
          </div>
          <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience</b>
            <p className=" text-gary-600">
            We prioritize convenience, making our products and services accessible and easy to use, so you can focus on what matters most.

            </p>
          </div>
          <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exeptional Customer Service </b>
            <p className=" text-gary-600">
            Our customer support team is here to assist you at every step, ensuring a smooth and enjoyable experience.

            </p>
          </div>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
