import { Avatar, List } from "antd";
import React, { useState } from "react";



export const ListaProjetos = () => {
    const [modal, setModal] = useState(false);
    const handleClick = () => {
        setModal(!modal);
        console.log(modal)
    }
    const data = [
        {
            title: 'movies app',
            void: () => void{}
        },
        {
            title: 'info space',
        },
        {
            title: 'pokedex',
        },
        {
            title: 'api',
        },
    ];

    return (
        <div style={{ padding: '30px' }}>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item style={{
                        width:'80%',
                        cursor:'pointer',
                        border:'1px solid #a7a2a234',
                        margin:'10px auto',
                        padding:'15px',
                        borderRadius:'10px',
                        boxShadow:'2px 2px 4px #a7a2a234',
                        height:'14vh'
                        }}
                        onClick={handleClick}
                        >
                        <List.Item.Meta
                            title={<a>{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                       <img src="https://via.placeholder.com/150/92c952" height={100}/>
                    </List.Item>
                )}
            />
        </div>
    );
}