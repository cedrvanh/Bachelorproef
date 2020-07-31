import { isEmpty } from '~/helpers';

export default validate = (type, values) => {
    switch(type) {
        case "character-name":
            if (isEmpty(values)) {
                return {
                    name: [
                        'Please enter a name'
                    ]
                }
            } else if (values.name.length <= 2) {
                return {
                    name: [
                        'The name needs to be atleast 3 characters long'
                    ]
                }
            }
            return false;
        default:
            return [];
    }
}