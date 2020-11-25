<template>
    <v-container>
        <v-simple-table>
            <template>
                <thead>
                    <tr>
                        <th
                            v-for="title of table.tableTitle"
                            :key="title"
                        >
                            {{title}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="value in table.tableData"
                        :key="value.id"
                    >
                        <td>{{value.country}}</td>
                        <td>{{value.capital}}</td>
                        <td>{{value.area}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
export default {
    name: "AlertView",
    data: () => {
        return {
            table: {
                tableTitle: ["Country", "capital", "area"],
                tableData: [
                    {
                        country: "venezuela",
                        capital: "capital",
                        area: 2123
                    },
                    {
                        country: "venezuela",
                        capital: "capital",
                        area: 2123
                    },
                    {
                        country: "venezuela",
                        capital: "capital",
                        area: 2123
                    },
                    {
                        country: "venezuela",
                        capital: "capital",
                        area: 2123
                    }
                ]
            }
        }
    }
}
</script>

<style>

</style>