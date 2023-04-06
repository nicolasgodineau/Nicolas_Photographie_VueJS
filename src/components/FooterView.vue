<template>
    <footer class="fixed bottom-0 w-full text-center p-4 bg-neutral-100">
        <P>Copyright Nicolas Godineau {{ year }}</P>
    </footer>
</template>
<script>
export default {
    name: "FooterView",
    props: {
        year: {
            type: Number,
            required: true,
        },
    },
};
</script>
