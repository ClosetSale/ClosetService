package shopping.closet.config;



import shopping.closet.config.session.LogCheckInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LogCheckInterceptor())
                .order(1)
                .addPathPatterns("/**")
                .excludePathPatterns("/", "/join", "/login", "/css/**","/js/**", "/*.ico", "/error",
                        "/logout", "/forgot/id2","/forgot/id", "/forgot/pw","/forgot/pw2", "/new-password", "/admin/login", "/admin/logout",
                        "/my-page/imagesV3/{boardId}", "/my-page/imagesV2/{memberId}",
                        "/my-page/images/{boardId}", "/my-page/imageV4/{image}",
                        "/*.jpg", "logo/*.png", "/*.gif", "/logo/**","/*.png",
                        "/email-verification","/join-email","/aiimg/**","/ai/image/{filename}",
                        "/static/js/**","/image/**","/home/**","/member/**");

    }
}
