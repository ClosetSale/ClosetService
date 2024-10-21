package shopping.closet.member.repository;


import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import shopping.closet.member.domain.Member;

import java.util.Optional;

@RequiredArgsConstructor
@Repository
@Transactional
@Slf4j
public class MemberRepository {
    private final EntityManager em;
    private final BCryptPasswordEncoder passwordEncoder;

    public void save(Member member) {
        em.persist(member);
    }


    public void updatePassword(Member member ,String password) {
        Member findMember = em.find(Member.class, member.getMemberId());
        findMember.setPassword(passwordEncoder.encode(password));
    }


    public Optional<Member> findMemberId(String memberId) {
        try {
            Member findMember = em.createQuery("select m from Member m where m.memberId = :id ", Member.class)
                    .setParameter("id", memberId)
                    .getSingleResult();
            return Optional.of(findMember);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

    public Optional<Member> findByLoginId(Member member) {
        try {
            Member findMember = em.createQuery("select m from Member m where m.loginId = :loginId ", Member.class)
                    .setParameter("loginId", member.getLoginId())
                    .getSingleResult();
            return Optional.of(findMember);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

    public Optional<Member> findByName(Member member) {
        try {
            Member findMember = em.createQuery("select m from Member m where m.nickname = :loginId ", Member.class)
                    .setParameter("loginId", member.getNickname())
                    .getSingleResult();
            return Optional.of(findMember);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }


}
