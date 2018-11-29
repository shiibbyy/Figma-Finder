<template>
    <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
            <form action="https://figmafinder.us18.list-manage.com/subscribe/post?u=c85e237f64b4300c399048e89&amp;id=6f0abd32ba" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate mailchimp-form" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">

            <div class="mc-field-group">
                <label for="mce-EMAIL" style="display:none">Email Address </label>
                <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Enter Email" class="email-input">
            </div>
            <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c85e237f64b4300c399048e89_6f0abd32ba" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="display:none"></div>
            </div>

            <button class="email-button" name="subscribe" id="mc-embedded-subscribe"><p class="semibold light">Sign Up!</p></button>
            </form>
        </div>

<!--End mc_embed_signup-->
</template>

<script>
export default {
    name: 'Mailchimp'
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.email-input {
    height: 40px;
    width: 300px;
    border-radius: 4px;
    border: none;

    @media only screen and (max-width : $small-desktop) {
        height: 40px;
        width: 200px;
    }
}

.mailchimp-form {
    display: flex;
}

.email-button {
    height: 40px;
    border-radius: 4px;
    background-color: $purple;
    border: none;
    color: $white;
    padding: 7px 20px;
    cursor: pointer;
    margin-left: 10px;
}

</style>
