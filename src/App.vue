<template>
  <div id="app">
    
    <div style="padding:50px;">
      <h2>Vue Mail Autocomplete</h2>
      <EmailDropdown :domains="domains" :defaultDomains="defaultDomains" id="emaildropdownload"/>
</div>
   
  </div>
</template>

<script>
import EmailDropdown from "vue-email-dropdown";
export default {
  name: 'Vue-Mail-Autocompleted',
  data(){
    return {
      domains: [
        "yourcompany.com",
        "gmx.de",
        "googlemail.com",
        "hotmail.fr",
        "hotmail.it",
        "web.de",
        "yahoo.co.in",
        "yahoo.com",
        "yahoo.in"
      ],
      defaultDomains: ["gmail.com", "hotmail.com", "msn.com", "outlook.com", "yahoo.com"]
    }
  },
  components: {
    EmailDropdown
  }
}
</script>
<style>
  #emaildropdownload{
    height: 28px;
  }
</style>