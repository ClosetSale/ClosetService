package shopping.closet.member.web.find;

import shopping.closet.member.domain.Member;
import shopping.closet.member.repository.MemberRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Objects;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@Slf4j
public class FindPwController {
    private final MemberRepository memberRepository;
    @GetMapping("/forgot/pw")
    public String getForgotId(@ModelAttribute Member member
            , Model model) {
        model.addAttribute("member", member);
        return "/member/findpw";
    }

    @GetMapping("/forgot/pw2")
    public String getForgotId2(@RequestParam("loginId") String loginId
            ,@ModelAttribute Member member ,Model model) {
        member.setLoginId(loginId);
        model.addAttribute("member", member);
        return "/member/findpw2";
    }

    @PostMapping("/forgot/pw2")
    public String postForgotId2(@ModelAttribute Member member) {
        Optional<Member> findMember = memberRepository.findByLoginId(member);
        log.info(member.getLoginId());
        log.info(member.getPassword());
        if (findMember.isPresent()) {
            Member member1 = findMember.get();
            log.info("못찾음2?");
            memberRepository.updatePassword(member1,member.getPassword());
        } else {
            log.info("못찾음?");
            return "member/findpw";
        }
        return "member/popup2";
    }

    @PostMapping("/forgot/pw")
    public String postForgotId(@Validated
                               @ModelAttribute Member member,
                               BindingResult bindingResult,
                               HttpServletRequest request
    ) throws Exception {
        Optional<Member> findMember = memberRepository.findByLoginId(member);
        if (findMember.isPresent()) {
            Member member1 = findMember.get();
            if (!Objects.equals(member1.getLoginId(), member.getLoginId())) {
                bindingResult.reject("err", "일치하는 계정이 없습니다.");
                return "member/findpw";
            }

            return "redirect:/forgot/pw2?loginId=" + member1.getLoginId();

        } else {
            bindingResult.reject("err", "일치하는 계정이 없습니다.");
            return "member/findpw";
        }

    }
}
