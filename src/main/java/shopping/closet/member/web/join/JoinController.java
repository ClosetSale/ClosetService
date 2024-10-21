package shopping.closet.member.web.join;


import shopping.closet.config.session.SessionConst;

import shopping.closet.member.domain.Member;
import shopping.closet.member.repository.MemberRepository;
import shopping.closet.member.service.JoinService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.Objects;

@Slf4j
@Controller
@RequiredArgsConstructor
public class JoinController {
    private final JoinService joinService;
    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    @GetMapping("/join")
    public String getJoin(@ModelAttribute Member member,
                          Model model,
                          @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false)
                          Member loginMember) {
        if (loginMember != null) {
            return "redirect:/";
        }
        model.addAttribute("member", member);
        return "/member/popup";
    }

    @PostMapping("/join")
    public String postJoin(@Validated @ModelAttribute Member member, BindingResult bindingResult) {

        String save = joinService.save(member);
        if (Objects.equals(save, "loginId")) {
            bindingResult.reject("joinFail", "존재하는 아이디가 있습니다");
            return "member/popup";
        }

        if (Objects.equals(save, "name")) {
            bindingResult.reject("joinFail", "존재하는 닉네임이 있습니다");
            return "member/popup";
        }

        return "member/popup2";
    }






}