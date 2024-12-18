// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
 
// class HttpClient {
//   axiosInstance: any;
//   constructor() {
//     // 创建axios实例
//     this.axiosInstance = axios.create({
//       baseURL: 'http://your-api-url.com',
//       timeout: 10000,
//     });
 
//     // 添加请求拦截器
//     this.axiosInstance.interceptors.request.use(
//       (config: AxiosRequestConfig) => {
//         // 在发送请求前做些什么
//         console.log('Request Interceptor:', config);
//         // 可以在这里添加token等
//         // config.headers['Authorization'] = `Bearer your-token`;
//         return config;
//       },
//       (error: AxiosError) => {
//         // 对请求错误做些什么
//         return Promise.reject(error);
//       },
//     );
 
//     // 添加响应拦截器
//     this.axiosInstance.interceptors.response.use(
//       (response: AxiosResponse) => {
//         // 对响应数据做点什么
//         console.log('Response Interceptor:', response);
//         return response.data;
//       },
//       (error: AxiosError) => {
//         // 对响应错误做点什么
//         return Promise.reject(error);
//       },
//     );
//   }
 
//   get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return this.axiosInstance.get<T>(url, config);
//   }
 
//   post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
//     return this.axiosInstance.post<T>(url, data, config);
//   }
 
//   // 其他HTTP方法（put, delete等）可以类似添加
// }
 
// // 使用封装后的HttpClient
// const httpClient = new HttpClient();

// export default httpClient;