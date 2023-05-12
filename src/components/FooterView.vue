<template>
    <footer class="footerFixe h-8 w-full text-center text-xs tracking-widest font-titre p-2 bg-neutral-100">
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
