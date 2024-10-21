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
public class FindIdController {
    private final MemberRepository memberRepository;
    @GetMapping("/forgot/id")
    public String getForgotId(@ModelAttribute Member member
            , Model model) {
        model.addAttribute("member", member);
        return "/member/findID";
    }

    @GetMapping("/forgot/id2")
    public String getForgotId2(@RequestParam("loginId") String loginId
            , Model model) {
        model.addAttribute("member", loginId);
        return "/member/findID2";
    }

    @PostMapping("/forgot/id")
    public String postForgotId(@Validated
                               @ModelAttribute Member member,
                               BindingResult bindingResult,
                               HttpServletRequest request
    ) throws Exception {
        Optional<Member> findMember = memberRepository.findByName(member);
        if (findMember.isPresent()) {
            Member member1 = findMember.get();
            if (!Objects.equals(member1.getNickname(), member.getNickname())) {
                bindingResult.reject("err", "일치하는 계정이 없습니다.");
                return "member/findID";
            }

            return "redirect:/forgot/id2?loginId=" + member1.getLoginId();

        } else {
            bindingResult.reject("err", "일치하는 계정이 없습니다.");
            return "member/findID";
        }

    }
}
