import {
    ref
} from "vue";

let result = ref(null);
let checkGender = async (name) => {
    try {
        let fetchedResult = await fetch("https://api.genderize.io/?name=" + name);
        result.value = await fetchedResult.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
}
export {
    checkGender
}