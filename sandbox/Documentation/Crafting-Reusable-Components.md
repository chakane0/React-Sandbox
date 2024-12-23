# Crafting Reusable Components

Theres 2 main types of HTML elements we use:
* Feature Centric 
* Utility Centric (the more reusable one)

```<section></section>``` would be considered a utility centric element. We have a general intuition of how this and other elements are to be used. 

#### Monolithic Components
This sounds simple in theory; implementing one component for any given feature. This is bad in practice beacause it would be hard to opttimize the component later on. 

Heres a bad example of a monolithic component

<details>
<summary>Bad example of monolithic component</summary>

```.jsx
import React, {Component} from "react";
const id = (function*() {
    let i = 1;
    while(true) {
        yield i;
        i += 1;
    }
})();


export default class MyFeature extends Component {

    state = {
        articles: [
        {
            id: id.next(),
            title: "Article 1",
            summary: "Article 1 Summary",
            display: "none"
        },
        {
            id: id.next(),
            title: "Article 2",
            summary: "Article 2 Summary",
            display: "none"
        },
        {
            id: id.next(),
            title: "Article 3",
            summary: "Article 3 Summary",
            display: "none"
        },
        {
            id: id.next(),
            title: "Article 4",
            summary: "Article 4 Summary",
            display: "none"
        }
        ],
        title: "",
        summary: ""
    }

    onChangeTitle = e => {
        this.setState({title: e.target.value});
    }

    onChangeSummary = e => {
        this.setState({summary: e.target.value});
    }

    onClickAdd = () => {
        this.setState(state => ({
            articles: [
                ...state.articles,
                {
                    id: id.next(),
                    title: state.title,
                    summary: state.summary,
                    display: "none"
                }
            ],
            title: "",
            summary: ""
        }));
    };

    onClickRemove = id => {
        this.setState(state => ({
            ...state,
            articles: state.articles.filter(article => article.id !== id)
        }))
    }

    onClickToggle = id => {
        this.setState(state => {
            const articles = [...state.articles];
            const index = articles.findIndex(article => article.id === id);

            articles[index] = {
                ...articles[index],
                display: articles[index].display ? "" : "none"
            };
            return {...state, articles};
        });
    };

    render() {
        const {articles, title, summary} = this.state;

        return (
            <>
                <section>
                    <header>
                        <h1>Articles</h1>
                        <input placeholder="Title" value={title} onChange={this.onChangeTitle} />
                        <input placeholder="Summary" value={summary} onChange={this.onChangeSummary}/>
                        <button onClick={this.onClickAdd}>Add</button>
                    </header>

                    <article>
                        <ul>
                            {articles.map(i => (
                                <li key={i.id}>
                                    <a href={`#${i.id}`} title="Toggle Summary" onClick={this.onClickToggle.bind(null, i.id)}>{i.title}</a>
                                    &nbsp;
                                    <a href={`#${i.id}`} title="Remove" onClick={this.onClickToggle.bind(null, i.id)}>X</a>
                                    <p style={{display: i.display}}>{i.summary}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </section>
            </>
        )
    }
}
```
</details>

So the above code example if fully functional but the issue is, is that its monolithic, meaning its super hard to refactor.