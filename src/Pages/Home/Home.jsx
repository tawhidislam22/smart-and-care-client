import ECGLottie from '../../assets/lottieFile/ECG.json'
import Spo2Lottie from '../../assets/lottieFile/Spo2.json'
import heartrate from '../../assets/images/heartrate.jpg'
import ppirate from '../../assets/images/ppirate.jpg'
import Lottie from "lottie-react";


const Home = () => {
    return (
        <div className="md:w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 mt-32 gap-4">
            <div className="card mx-auto border-2 bg-base-100 w-96 shadow-sm">
                <figure>
                    <Lottie animationData={ECGLottie}></Lottie>
                </figure>
                <div className="card-body">
                    <h2 className='text-4xl'>1.1 mV</h2>
                    <h3 className='text-2xl'>ECG</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam tempore voluptate error aspernatur nulla molestias reiciendis quibusdam commodi cupiditate. Magni possimus ex tenetur placeat dolorem labore porro necessitatibus distinctio!</p>
                </div>
            </div>
            <div className="card mx-auto border-2 bg-base-100 w-96 shadow-sm">
                <figure>
                    <Lottie animationData={Spo2Lottie}></Lottie>
                </figure>
                <div className="card-body">
                    <h2 className='text-4xl'>98%</h2>
                    <h3 className='text-2xl'>SpO2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam tempore voluptate error aspernatur nulla molestias reiciendis quibusdam commodi cupiditate. Magni possimus ex tenetur placeat dolorem labore porro necessitatibus distinctio!</p>
                </div>
            </div>
            <div className="card border-2 bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={heartrate}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className='text-4xl'>75 bpm</h2>
                    <h3 className='text-2xl'>Heart Rate</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam tempore voluptate error aspernatur nulla molestias reiciendis quibusdam commodi cupiditate. Magni possimus ex tenetur placeat dolorem labore porro necessitatibus distinctio!</p>
                </div>
            </div>

            <div className="card border-2 bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={ppirate}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                <h2 className='text-4xl'>512mm</h2>
                    <h3 className='text-2xl'>PPG</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam tempore voluptate error aspernatur nulla molestias reiciendis quibusdam commodi cupiditate. Magni possimus ex tenetur placeat dolorem labore porro necessitatibus distinctio!</p>
                </div>
            </div>
            
        </div>
    );
};

export default Home;