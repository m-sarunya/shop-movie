const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Mobile Phone',
        dataIndex: 'mobilePhone',
        key: 'mobilePhone',
    },
    {
        title: 'Nationality',
        dataIndex: 'nationality',
        key: 'nationality',
    },
    {
        title: '',
        dataIndex: 'access',
        key: 'access',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        )
    },
];