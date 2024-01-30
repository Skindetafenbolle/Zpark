<script>
    import Header from "$lib/sections/Header.svelte";
    import Footer from "$lib/sections/Footer.svelte";
    import BtnUp from "../lib/component/aside/BtnUp.svelte";
    import BtnHoliday from "../lib/component/aside/BtnHoliday.svelte";
    import BookHoliday  from "$lib/component/popup/BookHoliday.svelte";
    import Subscribe from "../lib/sections/Subscribe.svelte";
</script>

<div class='wrapper'>
    <BookHoliday />
    <div class='header'>
        <Header />
    </div>
    <main class='main'>
        <slot />

    </main>
    <aside class="side-panel">
        <BtnUp visibilityHeight=100 size={45} />
        <BtnHoliday size={45}/>
    </aside>
    <footer class="footer">
        <Subscribe />
        <Footer />
    </footer>
</div>

<style>
    .wrapper {
        max-width: 1440px;
        margin: 0 auto;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        background: #fff;
    }
    .header {
        position: sticky;
        top: 0;
        z-index: 10;
    }
    .main {
        flex: 1 1 auto;
    }
    .side-panel {
        position: fixed;
        z-index: 10;
        bottom: 30px;
        right: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>
