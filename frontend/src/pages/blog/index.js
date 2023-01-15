
import './style.css';

export default function Blog() {
    return (<>

        {/* SEÇÃO BLOG */}
        <section class="py-5">
            <div class="my-2">
                <div class="videoresponsivo-embedcontainer">
                    <iframe
                        title='blogframe'
                        src="https://surproducoes.blogspot.com/"
                        id="iframe_container"
                        frameborder="0"
                        webkitallowfullscreen=""
                        mozallowfullscreen=""
                        allowfullscreen=""
                        allow="autoplay; fullscreen"
                        width="100%"
                        height="1000"
                    ></iframe>
                </div>
            </div>
        </section>
        {/* FIM DA BLOG */}

    </>);
}