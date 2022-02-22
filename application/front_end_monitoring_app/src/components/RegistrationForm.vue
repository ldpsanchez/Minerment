<template>
    <v-card 
        height="555px" 
        width="550"
        class="d-flex flex-column justify-center align-center"
        outlined
    >
        <v-card-title
            class="flex-row justify-start card-title"
            style="width: 100%;"
        >
            <p>reset password</p>
        </v-card-title>
        <v-card-text
            class="card-body"
        >
            <v-form>
                <v-text-field
                    v-model="email_or_User"
                    label="email address"
                    placeholder="enter your email address"
                ></v-text-field>
                <div class="container-buttons">
                    <v-btn
                    class="button-success"
                    >send</v-btn>
                    <v-btn 
                    class="button-back"
                    text
                    >
                        <router-link :to="{ name: `home` }">back to login</router-link>
                    </v-btn>
                </div>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.v-card {
    border-width: 0 !important;
}

.card-title {
    p {
        color: black !important;
        font-family: "PoppinsBold" !important;
        font-size: 33px !important;
        text-transform: capitalize;
    }
}

.card-body {
    height: 300px;
    .v-from {
        height: 100vh !important;
    }
}

.v-text-field__slot {
    label {
        font-family: "PoppinsSemiBold" !important;
        font-size: 20px !important;
        text-transform: capitalize;
    }

    input {
        &::placeholder {
            font-family: "PoppinsRegular";
            font-size: 16px;
            color: #5E6372 !important;
            text-transform: capitalize;
        }
    }
}
.container-buttons {
    height: 200px !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-success {
    width: 170px;
    height: 55px !important;
    background-color: #070F26 !important;
    span {
        font-family: "PoppinsMedium";
        font-size: 19px;
        text-transform: capitalize !important;
        color: white;
    }
}

.button-back {
    width: 260px;
    height: 55px !important;
    border-radius: 4px;
    span > a {
        font-family: "PoppinsMedium";
        font-size: 19px;
        text-transform: capitalize !important;
        text-decoration: none;
        color: black;
    }
}
</style>