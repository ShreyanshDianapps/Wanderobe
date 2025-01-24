import localimages from "./localimages"
import strings from "./strings"
import { ChoseYorHotelIcon,ShopYourWanderobe,Try_DecideIcon,HotelDelivartIcon } from "./Svgicons"
export const data= [
    {
        image:localimages.tutorialImage1,
        title:strings.Welcome,
        title2:strings.newWorderobe
    },
    {
        image:localimages.tutorialImage2,
        title:strings.Book,
        title2:strings.Fashion
    },
    {
        image:localimages.tutorialImage3,
        title:strings.Checkin,
        title2:strings.Checkout
    },
    {
        image:localimages.tutorialImage4,
        title:strings.Checkin,
        title2:strings.Checkout
    }

]
export const HowworkInfo=[
    {
        id:1,
        icon:ChoseYorHotelIcon,
        text1:"Choose Your Hotel",
        text2:"Select your hotel and arrival date to get started."
    },
    {
        id:2,
        icon:ShopYourWanderobe,
        text1:"Shop Your Wardrobe",
        text2:"Browse designer items, add to your bag, confirm your order and pay a service fee."
    },
    {
        id:3,
        icon:Try_DecideIcon,
        text1:"Hotel Delivery",
        text2:"Your wardrobe will be ready in your hotel on arrival day."
    },
    {
      id:4,
        icon:HotelDelivartIcon,
        text1:"Try & Decide",
        text2:"Use your hotel room as a fitting room for 48 hours. Keep what you love, return the rest hassle-free."
    },
]