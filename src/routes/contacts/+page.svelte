<script>
    import SectionTitle from "$lib/component/SectionTitle.svelte"
    import Contacts from "$lib/sections/Contacts.svelte";
</script>
<SectionTitle value='Наши контакты'/>
<div class='wrapper'>
    <Contacts />
</div>

<style>
    @media screen and (min-width: 600px) {
        .wrapper {
            max-width: 2000px;
            margin: 0 auto;
            padding: 50px 20px;
        }
    }
    @media screen and (max-width: 600px) {
        .wrapper {
            padding: 20px 10px;
        }
    }
</style>
