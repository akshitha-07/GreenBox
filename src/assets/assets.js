import basket_icon from './basket_icon.png'
import logo from './icon.jpg'
import header_img from './header.jpg'
import search_icon from './search_icon.png'

import Apple from './Apple.jpg'
import Bananas from './Bananas.jpeg'
import BitterG from './BitterG.jpg'
import BottleG from './BottleG.jpg'
import Brinjal from './Brinjal.webp'
import BroadBeans from './BroadBeans.webp'
import Chili from './Chili.jpg'
import ClusterBeans from './ClusterBeans.webp'
import Coriander from './Coriander.jpg'
import CurryLeaves from './CurryLeaves.webp'
import Dragonfruit from './Dragonfruit.jpg'
import Farm_1 from './Farm_1.jpg'
import Farm_2 from './Farm_2.jpg'
import Farm_3 from './Farm_3.jpg'
import Farm_4 from './Farm_4.jpg'
import Farm_5 from './Farm_5.jpg'
import Farm_6 from './Farm_6.jpg'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.avif'
import menu_3 from './menu_3.jpg'

import LadyFinger from './Finger.webp'
import GrapesB from './GrapesB.jpg'
import GrapesG from './GrapesG.jpg'
import IvyG from './IvyG.jpg'
import Peas from './Peas.jpg'
import Pomegranate from './Pomegranate.jpg'
import RidgeG from './RidgeG.jpg'
import Spinach from './Spinach.jpg'
import Tomato from './Tomato.jpg'
import Bajra from './bajra.jpg'
import brownrice from './brown-rice.jpg'
import chana from './chana.jpg'
import Chiaseeds from './chia.jpg'
import coconut from './coconut.jpg'
import Fenugreek from './fenugreek-leaves.jpg'
import Fenugreeks from './fenugreek.webp'
import garlic from './garlic.jpg'
import ginger from './ginger.jpg'
import jaggery from './jaggery.png'
import jowar from './jowar.jpeg'
import moong from './moong.webp'
import mustard from './mustard.jpg'
import oats from './oats.jpeg'
import onion from './onion.jpg'
import peanut from './peanut.jpg'
import poha from './poha.jpeg'
import Quinoa from './Quinoa.jpg'
import ragi from './ragi.webp'
import rava from './rava.jpg'
import redchilli from './red-chilli.jpg'
import ricef from './rice-flour.jpg'
import sesame from './sesame.jpg'
import Sorrel from './Sorrel.jpg'
import tamaring from './tamarind.jpeg'
import tapioca from './tapioca.webp'
import toor from './toor.jpg'
import uraddal from './urad-dal.jpg'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    Farm_1,
    Farm_2,
    Farm_3,
    Farm_4,
    Farm_5,
    Farm_6
}

export const menu_list = [
    {
        menu_name: "Fruit",
        menu_image: menu_1
    },
    {
        menu_name: "Vegetables",
        menu_image: menu_2
    },
    {
        menu_name: "other",
        menu_image: menu_3
    }
]

export const food_list = [
    {
        _id: "1",
        name: "Apple",
        image: Apple,
        price: 12,
        
        category: "Fruit"
    },
    {
        _id: "2",
        name: "Banana",
        image: Bananas,
        price: 18,
        category: "Fruit"
    }, {
        _id: "3",
        name: "Bitter Gourd (Kakara Kaya)",
        image: BitterG,
        price: 16,
        category: "Vegetables"
    }, {
        _id: "4",
        name: "Bottle Gourd",
        image: BottleG,
        price: 24,
        category: "Vegetables"
    }, {
        _id: "5",
        name: "Brinjal",
        image: Brinjal,
        price: 14,
        category: "Vegetables"
    }, {
        _id: "6",
        name: "Broad Beans (Chikkudu Kaya)",
        image: BroadBeans,
        price: 12,
        category: "Vegetables"
    }, {
        _id: "7",
        name: "Chilli",
        image: Chili,
        price: 20,
        category: "Vegetables"
    }, {
        _id: "8",
        name: "Cluster Beans (Goruchikkudu Kaya)",
        image: ClusterBeans,
        price: 15,
        category: "Vegetables"
    }, {
        _id: "9",
        name: "Coriander",
        image: Coriander,
        price: 14,
        category: "Vegetables"
    }, {
        _id: "10",
        name: "Curry Leaves (Karivepaku)",
        image: CurryLeaves,
        price: 22,
        category: "Vegetables"
    }, {
        _id: "11",
        name: "Dragon Fruit",
        image: Dragonfruit,
        price: 10,
        category: "Fruit"
    }, {
        _id: "12",
        name: "Ivy Gourd (Dondakaya)",
        image: IvyG,
        price: 12,
        category: "Vegetables"
    },
    {
        _id: "13",
        name: "Green Peas (Bataani)",
        image: Peas,
        price: 12,
        category: "Vegetables"
    },
    {
        _id: "14",
        name: "Pomegranate",
        image: Pomegranate,
        price: 18,
        category: "Fruit"
    }, {
        _id: "15",
        name: "Ridge Gourd (Beerakaya)",
        image: RidgeG,
        price: 16,
        category: "Vegetables"
    }, {
        _id: "16",
        name: "Spinach",
        image: Spinach,
        price: 24,
        category: "Vegetables"
    }, {
        _id: "17",
        name: "Tomato",
        image: Tomato,
        price: 14,
        category: "Vegetables"
    }, {
        _id: "18",
        name: "Lady's Finger (Bendakaya)",
        image: LadyFinger,
        price: 12,
        category: "Vegetables"
    }, {
        _id: "19",
        name: "Green Grapes",
        image: GrapesG,
        price: 20,
        category: "Fruit"
    }, {
        _id: "20",
        name: "Black Grapes",
        image: GrapesB,
        price: 15,
        category: "Fruit"
    }, {
        _id: "21",
        name: "Bajra flour",
        image: Bajra,
        price: 12,
        
        category: "other"
    }, {
        _id: "22",
        name: "Brown rice",
        image: brownrice,
        price: 18,
        category: "other"
    }, {
        _id: "23",
        name: "Chana dal",
        image: chana,
        price: 16,
        category: "other"
    }, {
        _id: "24",
        name: "Chia seeds",
        image: Chiaseeds,
        price: 24,
        category: "other"
    }, {
        _id: "25",
        name: "Coconut",
        image: coconut,
        price: 14,
        category: "other"
    }, {
        _id: "26",
        name: "Fenugreek leaves",
        image: Fenugreek,
        price: 12,
        category: "other"
    }, {
        _id: "27",
        name: "Fenugreek seeds",
        image: Fenugreeks,
        price: 20,
        category: "other"
    }, {
        _id: "28",
        name: "Garlic",
        image: garlic,
        price: 15,
        category: "other"
    }, {
        _id: "29",
        name: "Ginger",
        image: ginger,
        price: 14,
        category: "other"
    }, {
        _id: "30",
        name: "Jaggery",
        image: jaggery,
        price: 22,
        category: "other"
    }, {
        _id: "31",
        name: "Jowar flour",
        image: jowar,
        price: 10,
        category: "other"
    }, {
        _id: "32",
        name: "Moong dal",
        image: moong,
        price: 12,
        category: "other"
    },
    {
        _id: "33",
        name: "Mustard seeds",
        image: mustard,
        price: 12,
        category: "other"
    },
    {
        _id: "34",
        name: "Oats",
        image: oats,
        price: 18,
        category: "other"
    }, {
        _id: "35",
        name: "Onion",
        image: onion,
        price: 16,
        category: "Vegetables"
    }, {
        _id: "36",
        name: "Peanuts",
        image: peanut,
        price: 24,
        category: "other"
    }, {
        _id: "37",
        name: "Poha",
        image: poha,
        price: 14,
        category: "other"
    }, {
        _id: "38",
        name: "Quinoa rice",
        image: Quinoa,
        price: 12,
        category: "other"
    }, {
        _id: "39",
        name: "Ragi flour",
        image: ragi,
        price: 20,
        category: "other"
    }, {
        _id: "40",
        name: "Rava",
        image: rava,
        price: 15,
        category: "other"
    },
    {
        _id: "41",
        name: "Red chilli",
        image: redchilli,
        price: 12,
        
        category: "Vegetables"
    },
    {
        _id: "42",
        name: "Rice flour",
        image: ricef,
        price: 18,
        category: "other"
    }, {
        _id: "43",
        name: "Sesame seeds",
        image: sesame,
        price: 16,
        category: "other"
    }, {
        _id: "44",
        name: "Sorrel",
        image: Sorrel,
        price: 24,
        category: "Vegetables"
    }, {
        _id: "45",
        name: "Tamarind",
        image: tamaring,
        price: 14,
        category: "other"
    }, {
        _id: "46",
        name: "Tapioca pearls",
        image: tapioca,
        price: 12,
        category: "other"
    }, {
        _id: "47",
        name: "Toor dal",
        image: toor,
        price: 20,
        category: "other"
    }, {
        _id: "48",
        name: "Urad dal",
        image: uraddal,
        price: 15,
        category: "other"
    }
]