"use client"
import { useState } from "react";
import Image from "next/image";
import BG from "@/app/components/images/BG.png";
import BG2 from "@/app/components/images/BG-2.png";
import pickMark from "@/app/components/images/pickMark.png";
import dropMark from "@/app/components/images/dropMark.png";
import arrowDown from "@/app/components/images/arrow-down.png";
import swap from "@/app/components/images/Swap.png";

import redCardHeart from "@/app/components/images/red-card-heart.png";
import normalCardHeart from "@/app/components/images/normal-card-heart.png";

import koenigsegg from "@/app/components/images/koenigsegg.png";
import NissanGTR from "@/app/components/images/NissanGT-R.png";
import RollsRoyce from "@/app/components/images/RollsRoyce.png";
import AllNewRush from "@/app/components/images/AllNewRush.png";
import CRV from "@/app/components/images/CR-V.png";
import AllNewTerios from "@/app/components/images/AllNewTerios.png";
import CRV2 from "@/app/components/images/CR-V2.png";
import MGZXExclusice from "@/app/components/images/MGZXExclusice.png";
import NewMGZS from "@/app/components/images/NewMGZS.png";
import MGZXExcite from "@/app/components/images/MGZXExcite.png"
import NewMGZS2 from "@/app/components/images/NewMGZS2.png";

import carShadow from "@/app/components/images/shadow.png";

import gasIcon from "@/app/components/images/gas-station-icon.png";
import profileIcon from "@/app/components/images/profile-icon.png";
import steeringIcon from "@/app/components/images/steering-icon.png";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCity2, setSelectedCity2] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const [selectedTime2, setSelectedTime2] = useState("");

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };
  
  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };
  
  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleCityChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity2(event.target.value);
  };
  
  const handleDateChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate2(event.target.value);
  };
  
  const handleTimeChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime2(event.target.value);
  };
  
  
  return (
    <div className="main-container">
      <div className="ads-group">
        {/* Ad 1 */}
        <div className="ad-1">
          <Image src={BG} alt="Company Ad 1" width={775} height={775} className="ad-img" />
          <div className="ad-content">
            <p className="ad-title">The Best Platform For Car Rental</p>
            <p className="ad-description">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className="ad-1-btn">Rental Car</button>
          </div>
        </div>

        {/* Ad 2 */}
        <div className="ad-2">
          <Image src={BG2} alt="Company Ad 2" width={775} height={775} className="ad-img" />
          <div className="ad-content">
            <p className="ad-title">Easy way to rent a car at a low price</p>
            <p className="ad-description">Providing cheap car rental services and safe and comfortable facilities.</p>
            <button className="ad-2-btn">Rental Car</button>
          </div>
        </div>
        
      </div>

      {/* Pickup Section */}
      <div className="pickDrop-group">
        <div className="pickupDropoff-container">

          <div className="pickupDropoff-top">
            <Image src={pickMark} alt="Pick Mark" width={16} height={16} className="mark" />
            <p className="pickupDropoff-title">Pick-Up</p>
          </div>

          {/* Locations */}
          <div className="pickupDropoff-bottom">
            <div className="locations">
              <p className="pickupDropoff-bottom-title">Locations</p>
              <div className="selection">
                <select
                  className="city-select"
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  <option value="" disabled className="select-your-city">
                    Select your city
                  </option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Peshawar">Peshawar</option>
                </select>
                {/* <Image src={arrowDown} alt="Arrow Down" width={14} height={14} className="arrow-down" /> */}
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="date">
              <p className="pickupDropoff-bottom-title">Date</p>
              <div className="selection">
                <select
                  className="city-select"
                  value={selectedDate}
                  onChange={handleDateChange}
                >
                  <option value="" disabled className="select-your-city">
                    Select your date
                  </option>
                  <option>1</option>
                  <option>7</option>
                  <option>14</option>
                  <option>21</option>
                  <option>28</option>
                </select>
                {/* <Image src={arrowDown} alt="Arrow Down" width={14} height={14} className="arrow-down" /> */}
              </div>
            </div>
          
          {/* Time */}
          <div className="time">
              <p className="pickupDropoff-bottom-title">Time</p>
              <div className="selection">
                <select
                  className="city-select"
                  value={selectedTime}
                  onChange={handleTimeChange}
                >
                  <option value="" disabled className="select-your-time">
                    Select your time
                  </option>
                  <option>1:00 PM</option>
                  <option>3:00 PM</option>
                  <option>6:00 PM</option>
                  <option>9:00 PM</option>
                  <option>11:00 PM</option>
                </select>
                {/* <Image src={arrowDown} alt="Arrow Down" width={14} height={14} className="arrow-down" /> */}
              </div>
            </div>
        </div>

        {/* Swap/Switch Button */}
        <button className="switch">
        <Image src={swap} alt="Switch/Swap" width={24} height={24} className="swap" />
        </button>

        {/* Dropoff Section */}
        <div className="pickupDropoff-container">

          <div className="pickupDropoff-top">
            <Image src={dropMark} alt="Pick Mark" width={16} height={16} className="mark" />
            <p className="pickupDropoff-title">Drop-Off</p>
          </div>
          
          {/* Locations */}
          <div className="pickupDropoff-bottom">
            <div className="locations">
              <p className="pickupDropoff-bottom-title">Locations</p>
              <div className="selection">
                <select
                  className="city-select"
                  value={selectedCity2}
                  onChange={handleCityChange2}
                >
                  <option value="" disabled className="select-your-city">
                    Select your city
                  </option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Peshawar">Peshawar</option>
                </select>
                {/* <Image src={arrowDown} alt="Arrow Down" width={14} height={14} className="arrow-down" /> */}
              </div>
            </div>
          </div>
          
          {/* Date */}
            <div className="date">
              <p className="pickupDropoff-bottom-title">Date</p>
              <div className="selection">
                <select
                  className="city-select"
                  value={selectedDate2}
                  onChange={handleDateChange2}
                >
                  <option value="" disabled className="select-your-city">
                    Select your date
                  </option>
                  <option>1</option>
                  <option>7</option>
                  <option>14</option>
                  <option>21</option>
                  <option>28</option>
                </select>
                {/* <Image src={arrowDown} alt="Arrow Down" width={14} height={14} className="arrow-down" /> */}
              </div>
            </div>
          
          {/* Time */}
          <div className="time">
              <p className="pickupDropoff-bottom-title">Time</p>
              <div className="selection">
                <select
                  className="city-select"
                  value={selectedTime2}
                  onChange={handleTimeChange2}
                >
                  <option value="" disabled className="select-your-time">
                    Select your time
                  </option>
                  <option>1:00 PM</option>
                  <option>3:00 PM</option>
                  <option>6:00 PM</option>
                  <option>9:00 PM</option>
                  <option>11:00 PM</option>
                </select>
                {/* <Image src={arrowDown} alt="Arrow Down" width={14} height={14} className="arrow-down" /> */}
              </div>
            </div>
        </div>
      </div>

      {/* Car Products Top Text */}
      <div className="car-products-top-group">
        <div className="car-products-top-container">
          <p className="popular-car">Popular Car</p>
          <p className="view-all">View All</p>
        </div>
      </div>

      {/* Cards Group */}
      <div className="car-products-cards-group">
      {/* Cards */}
      {/* Card 1 */}
        <div className="card">
          <p className="card-title">Koenigsegg</p>
          <p className="card-sub-title">Sport</p>
          <Image src={redCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={koenigsegg} alt="Red Card Heart" width={232} height={72} className="car-img-card" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information">
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">90L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">2 People</p>
          </div>

          <div className="payment-information">
            <p className="amount">$99.00/</p>
            <p className="per-day">day</p>
            <button className="rent-now-btn">
            Rent Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <p className="card-title">Nissan GT - R</p>
          <p className="card-sub-title">Sport</p>
          <Image src={normalCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={NissanGTR} alt="Red Card Heart" width={232} height={72} className="car-img-card" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information">
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">80L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">2 People</p>
          </div>

          <div className="payment-information2">
            <p className="amount">$80.00/</p>
            <p className="per-day">day</p>
            <p className="strikethrough-amount">$100.00</p>
            <button className="rent-now-btn2">
            Rent Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <p className="card-title">Rolls-Royce</p>
          <p className="card-sub-title">Sedan</p>
          <Image src={redCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={RollsRoyce} alt="Red Card Heart" width={232} height={72} className="car-img-card" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information">
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">70L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">4 People</p>
          </div>

          <div className="payment-information">
            <p className="amount">$96.00/</p>
            <p className="per-day">day</p>
            <button className="rent-now-btn">
            Rent Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <p className="card-title">Nissan GT - R</p>
          <p className="card-sub-title">Sport</p>
          <Image src={normalCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={NissanGTR} alt="Red Card Heart" width={232} height={72} className="car-img-card" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information">
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">80L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">2 People</p>
          </div>

          <div className="payment-information2">
            <p className="amount">$80.00/</p>
            <p className="per-day">day</p>
            <p className="strikethrough-amount">$100.00</p>
            <button className="rent-now-btn2">
            Rent Now
            </button>
          </div>
        </div>
      </div>

      {/* Car Products Top Text */}
      <div className="car-products-top-group">
        <div className="car-products-top-container">
          <p className="recommendation-car">Recommendation Car</p>
          <p className="view-all"></p>
        </div>
      </div>


      {/* Cards Group 2 Rows */}
      <div className="car-products-cards-group pb-8">
      {/* Cards */}
      {/* Card 1 */}
      <div className="card">
          <p className="card-title">All New Rush</p>
          <p className="card-sub-title">SUV</p>
          <Image src={normalCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={AllNewRush} alt="Red Card Heart" width={232} height={72} className="car-img-card" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information"  style={{ marginTop: "32px" }}>
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">70L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">6 People</p>
          </div>

          <div className="payment-information2">
            <p className="amount">$72.00/</p>
            <p className="per-day">day</p>
            <p className="strikethrough-amount">$80.00</p>
            <button className="rent-now-btn2" style={{ marginLeft: "31px" }}>
            Rent Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <p className="card-title">CR-V</p>
          <p className="card-sub-title">SUV</p>
          <Image src={redCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={CRV} alt="Red Card Heart" width={232} height={72} className="car-img-card" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information" style={{ marginTop: "44px" }}>
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">80L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">6 People</p>
          </div>

          <div className="payment-information">
            <p className="amount">$80.00/</p>
            <p className="per-day">day</p>
            <button className="rent-now-btn">
            Rent Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <p className="card-title">All New Terios</p>
          <p className="card-sub-title">SUV</p>
          <Image src={normalCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={AllNewTerios} alt="Red Card Heart" width={232} height={72} className="car-img-card" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information" style={{ marginTop: "32px" }}>
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">90L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">6 People</p>
          </div>

          <div className="payment-information">
            <p className="amount">$74.00/</p>
            <p className="per-day">day</p>
            <button className="rent-now-btn">
            Rent Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <p className="card-title">CR-V</p>
          <p className="card-sub-title">SUV</p>
          <Image src={redCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={CRV2} alt="Red Card Heart" width={232} height={72} className="car-img-card" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information" style={{ marginTop: "42px" }}>
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">80L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">6 People</p>
          </div>

          <div className="payment-information">
            <p className="amount">$80.00/</p>
            <p className="per-day">day</p>
            <button className="rent-now-btn">
            Rent Now
            </button>
          </div>
        </div>
        </div>

      <div className="car-products-cards-group">

      {/* Card 5 */}
      <div className="card">
          <p className="card-title">MGZXExclusice</p>
          <p className="card-sub-title">Hatchback</p>
          <Image src={redCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={MGZXExclusice} alt="Red Card Heart" width={264} height={108} className="car-img-card pr-6" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information" style={{ marginTop: "36px" }}>
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">70L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">4 People</p>
          </div>

          <div className="payment-information2">
            <p className="amount">$76.00/</p>
            <p className="per-day">day</p>
            <p className="strikethrough-amount">$80.00</p>
            <button className="rent-now-btn2">
            Rent Now
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card">
          <p className="card-title">New MG ZS</p>
          <p className="card-sub-title">SUV</p>
          <Image src={normalCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={NewMGZS} alt="Red Card Heart" width={288} height={112} className="car-img-card pr-6" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information" style={{ marginTop: "39px" }}>
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">80L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">6 People</p>
          </div>

          <div className="payment-information">
            <p className="amount">$80.00/</p>
            <p className="per-day">day</p>
            <button className="rent-now-btn">
            Rent Now
            </button>
          </div>
        </div>

        {/* Card 7 */}
        <div className="card">
          <p className="card-title">MG ZXExcite</p>
          <p className="card-sub-title">Hatchback</p>
          <Image src={redCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={MGZXExcite} alt="Red Card Heart" width={264} height={108} className="car-img-card pr-6" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information" style={{ marginTop: "37px" }}>
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">90L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">4 People</p>
          </div>

          <div className="payment-information">
            <p className="amount">$74.00/</p>
            <p className="per-day">day</p>
            <button className="rent-now-btn">
            Rent Now
            </button>
          </div>
        </div>

        {/* Card 8 */}
        <div className="card">
          <p className="card-title">New MG ZS</p>
          <p className="card-sub-title">SUV</p>
          <Image src={normalCardHeart} alt="Red Card Heart" width={24} height={24} className="card-heart" />
          <Image src={NewMGZS2} alt="Red Card Heart" width={288} height={112} className="car-img-card pr-6" />
          <Image src={carShadow} alt="Car Shadow" width={304} height={68} className="car-img-shadow" />

          <div className="card-icon-information" style={{ marginTop: "36px" }}>
            <Image src={gasIcon} alt="Gas Station Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">80L</p>

            <Image src={steeringIcon} alt="Steering Icon" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">Manual</p>

            <Image src={profileIcon} alt="Passengers" width={24} height={24} className="icon-1" />
            <p className="card-icon-information-text">6 People</p>
          </div>

          <div className="payment-information">
            <p className="amount">$80.00/</p>
            <p className="per-day">day</p>
            <button className="rent-now-btn">
            Rent Now
            </button>
          </div>
        </div>
        
      </div>

      <div className="show-more-container">
        <button className="show-more">
          Show more car
        </button>
      </div>
      <p className="ot-car">120 Car</p>

    </div>
  );
}
