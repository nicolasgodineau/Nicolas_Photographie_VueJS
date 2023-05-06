<template>
    <!-- Pour fixer le footer en bas de page, ajouter 'fixed bottom-0' -->
    <footer class="fixed bottom-0 w-full text-center text-xs p-2 bg-neutral-100">
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
