import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import smoothScroll from "./modules/smoothScroll";
import validate from "./modules/validate";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import data from "./modules/data";


timer('11 november 2022');
menu();
modal();
smoothScroll();
validate();
tabs();
slider('portfolio-content', 'portfolio-item', 'portfolio-dots', 'portfolio-item-active');
calc();
data('http://localhost:8080/db/db.json');