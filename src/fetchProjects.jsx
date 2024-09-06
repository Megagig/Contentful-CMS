import { createClient } from 'contentful';
const client = createClient({
  space: 'u4i7cbtd8oxq',
  environment: 'master',
  accessToken: 'NIob94qwXc22URVY_WrvanttfzdsILLl49RS5QToO4M',
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response));
