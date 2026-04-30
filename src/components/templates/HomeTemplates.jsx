import styled from "styled-components"

export function HomeTemplates() {
    return (
        <ContenedorTemplates>
            <section className="area1">
                <h1>HomeTemplates</h1>
            </section>
        </ContenedorTemplates>
    )
}

const ContenedorTemplates = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    .area1 {
        padding: 20px;
    }
`
