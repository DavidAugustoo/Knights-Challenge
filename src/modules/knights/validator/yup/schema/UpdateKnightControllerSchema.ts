import * as Yup from "yup";

import { required } from "@shared/validator/validatorHelpers";

export const schema = Yup.object().shape({
    nickname: Yup.string().required(required("Nickname")),
});
