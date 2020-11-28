<template>
    <v-container fluid>
      <v-row>
        <div>
          <p class="title-main-manageuser">manage user</p>
        </div>
      </v-row>
      <v-row>
        <ManageCreateNewUser></ManageCreateNewUser>
      </v-row>
      <v-row>
        <HistoryUserList></HistoryUserList>
      </v-row>
    </v-container>
</template>

<script>
import ManageCreateNewUser from "@/components/CreateNewUser";
import HistoryUserList from "@/components/HistoryUserList";

export default {
  name: "CreateNewUser",
  components: {
    ManageCreateNewUser,
    HistoryUserList
  }
}
</script>

<style lang="scss">
.title-main-manageuser {
  font-family: "PoppinsBold";
  font-size: 30px;
  text-transform: capitalize;
  white-space: nowrap;
}

</style>