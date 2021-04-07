<template>
	<div class="loginBj">
		<div class="loginFormlayout">
			<a-form :model="loginForm" ref="loginForm" :rules="loginRules">
				<div class="loginlogo">
					<img :src="logo" alt="蓝深科技" />
				</div>
				<a-form-item name="userName">
					<a-input
						style="width:320px"
						placeholder="请输入工号/手机号码/邮箱"
						type="text"
						v-model:value="loginForm.userName"
					>
						<template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)"/></template>
					</a-input>
				</a-form-item>
				<a-form-item name="password">
					<a-input style="width:320px" placeholder="请输入密码" type="password" v-model:value="loginForm.password">
						<template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)"/></template>
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-checkbox v-model="rememberPwd" style="color: #fff">记住密码</a-checkbox>
				</a-form-item>
				<a-form-item style="margin:30px 0;">
					<a-button
						class="loginButton"
						:loading="loading"
						@click.prevent="handleLogin"
						style="width: 100%"
						type="primary"
						>登录</a-button
					>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>

<script lang="ts">
import logo from '@/assets/favicon.png'
import { isNil } from 'ramda'
import { PermissionModule } from '@/store/modules/permission'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

interface IntLoginForm {
	userName: string
	password: string
}

import { defineComponent } from 'vue'
export default defineComponent({
	components: {
		UserOutlined,
		LockOutlined
	},
	name: 'login',
	data() {
		return {
			loginForm: {
				userName: '',
				password: ''
			},
			loading: false,
			pwdType: 'password',
			logo: logo,
			rememberPwd: false,
			loginRules: {
				username: [
					{
						required: true,
						message: '请输入账户名',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}
				]
			}
		}
	},
	methods: {
		handleLogin: async function() {
			try {
				await (this.$refs.loginForm as HTMLFormElement).validate()
				this.loading = true
				// eslint-disable-next-line no-undef
				const { success, data } = await API.ucenter.sysUserLogin.login.request(this.loginForm)
				if (success && !isNil(data)) {
					localStorage.setItem('rantion-erp-accessToken', data.accessToken)
					localStorage.setItem('rantion-erp-userNo', data.userNo)
					if (this.rememberPwd) {
						localStorage.rememberPwd = this.rememberPwd ? 'true' : 'false'
						localStorage.userName = this.loginForm.userName
						localStorage.passWord = this.loginForm.password
					} else {
						localStorage.removeItem('rememberPwd')
						localStorage.removeItem('userName')
						localStorage.removeItem('passWord')
					}
					await PermissionModule.InitRoutes()
					const path = this.$route.query.redirect || '/'
					await this.$router.push(path as string)
				}
				// await UserModule.login(this.loginForm)
				// 记住密码
			} finally {
				this.loading = false
			}
		}
	}
})
</script>

<style lang="scss">
.loginFormlayout {
	position: absolute;
	top: 45%;
	transform: translateY(-50%);
	right: 10%;
	width: 400px;
	padding: 0 40px;
	box-sizing: border-box;
	background: #165ab0;
	border-radius: 5px;
	z-index: 0.8;
}

.loginlogo {
	padding: 40px 0;
	img {
		width: 80px;
		display: block;
		margin: 0 auto;
	}
}

.login {
	.a-input__inner {
		border: none;
		border-bottom: 1px solid #dcdfe6;
	}
}

.loginBj {
	height: 100vh;
	background: url(../../assets/login.png) #cdebff;
	background-size: 100% 100%;
}

.loginButton {
	background: #01164a;
	border-color: #01164a;
	border-radius: 5px;
	&:hover {
		background: none;
		border-color: none;
	}
}
</style>
