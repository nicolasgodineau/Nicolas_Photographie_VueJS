<template>
    <footer class="footerFixe w-full pt-2 flexCol items-center gap-3 font-titre bg-whiteTheme">
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
