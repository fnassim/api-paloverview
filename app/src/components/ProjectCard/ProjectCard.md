Project card example:

```js
<ProjectCard metrics={[{title: "Current sprint", value: "2"}, 
                       {title: "Total sprints", value: "5"}, 
                       {title: "Remaining days", value: "15"}]}
             remark={{title:"Remarks:", 
             content:"The project is doing fine and the client is really happy. But the thing is that we'll probably need one more developer because the next sprint is going to be a little bit more tough than expected."}} 
             status="good" subTitle="Client: DBS" 
             title="POSB Jolly V2" totalSprints="5" currentSprint="2"/>
```