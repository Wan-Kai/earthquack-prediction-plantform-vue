import Mock from "mockjs";

const UserData = Mock.mock({
    status: "200",
    totalCount: "20",
    "result|20": [{
        phoneNumber: "110",
        name: "张三",
        email: "@email",
        unit: "",
        description: "设备测试",
        "role|1": ["超级管理员", "普通用户"],
        time: "@date('yyyy-MM-dd HH:mm:ss')"
    }]
});

export { UserData };