import Switchery from 'switchery';
import select2 from 'select2';

import 'select2/dist/css/select2.css';
import 'switchery/switchery.css';

export const initSwitchButtons = () => {
    if(document.querySelector('.js-switch')) {
        const checkboxElements = document.querySelectorAll(".js-switch");
        [...checkboxElements].map(el => {
            const switchery = new Switchery(el, {
                className: 'switchery',
                color: '#5d78ff',
                speed: '0.2s'
            });
        });
    }
}

export const initSelectBoxes = () => {
    if (document.querySelector('.js-select')) {
        $('.js-select').select2({
            width: '100%',
            dropdownAutoWidth: true
        });
    }
}
