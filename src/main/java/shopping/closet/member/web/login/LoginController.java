package shopping.closet.member.web.login;

import shopping.closet.config.session.SessionConst;
import shopping.closet.member.domain.Member;
import shopping.closet.member.service.LoginService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequiredArgsConstructor
@Slf4j
public class LoginController {

    private final LoginService loginService;
    @GetMapping("/login")
    public String getLogin(@ModelAttribute Member member,
                           @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false)
                           Member loginMember, Model model) {

        if (loginMember != null) {
            return "redirect:/";
        }
        model.addAttribute("member", member);
        return "member/login";
    }

    @PostMapping("/login")
    public String postLogin(@Validated @ModelAttribute Member member, BindingResult bindingResult,
                            @RequestParam(defaultValue = "/") String redirectURL,
                            HttpServletRequest request) throws Exception {

        Optional<Member> findLoginMember = loginService.loginIdCheck(member);
        if (findLoginMember.isEmpty()) {
            bindingResult.reject("loginFail", "아이디가 존재하지 않습니다");
            return "/member/login";
        }

        Member passwordMember = loginService.passwordCheck(member);
        if (passwordMember == null) {
            bindingResult.reject("loginFail", "비밀번호가 일치하지 않습니다");
            return "/member/login";
        }

        //로그인 성공
        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER, passwordMember);

        return "redirect:" + redirectURL;
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request,
                         @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false)
                         Member loginMember){

        HttpSession session = request.getSession(false);
        if(session != null){
            session.invalidate();
        }

        return "redirect:/";
    }
}
