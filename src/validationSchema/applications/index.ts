import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  freelancer_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
